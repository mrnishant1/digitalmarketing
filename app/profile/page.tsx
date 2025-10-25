"use client";
import { onAuthStateChanged, User } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { signouthandler } from "../signin/signInHandler";
import Loading from "./loading";
import Image from "next/image";
import { firebaseDB } from "../signin/firebaseconfig";
import { auth } from "../signin/firebaseconfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { GiReturnArrow } from "react-icons/gi";
import { useRouter } from "next/navigation";
import useNotification from "@/components/ui/usenotification";
import axios from "axios";
// import sendMail from "../components/sendMail";

const ProfileSection = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [credits, setCredits] = useState(0);
  const [isTrialActive, setIsTrialActive] = useState<boolean>(false);
  const [userExistance, setUserExistance] = useState<boolean>(false);
  const [isMarketingStarted, setMarketingStarted] = useState<boolean>(false);
  const router = useRouter();
  const { MessageRenderer, pushMessage } = useNotification();

  const [user, setUser] = useState({
    fullname: "",
    brandname: "",
    Contactnumber: "",
    address: "",
    whatsappNo: "",
    trialCreditsProvided: true,
    currentcredits: 50,
    isMarketingStarted: false,
    seowords: [],
  });
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (curr) =>
      setCurrentUser(curr)
    );
    return () => unsubscribe();
  }, []);

  //Pre Check of userExisting
  useEffect(() => {
    if (!currentUser || !firebaseDB) return;

    const checkUserExists = async () => {
      const userRef = doc(firebaseDB, "users", currentUser.uid);
      const snap = await getDoc(userRef);
      if (snap.exists()) {
        setUserExistance(true);
        setCredits(snap.data().currentcredits);
        setMarketingStarted(snap.data().isMarketingStarted);
      } else {
        setUserExistance(false);
      }
    };

    checkUserExists();
  }, [currentUser]);

  if (currentUser === null) return <Loading text="Login" />;
  const email = currentUser.email || "N/A";
  const displayName = currentUser.displayName || email.split("@")[0];
  const photoUrl = currentUser.photoURL;

  const displayCredits = credits ?? 0;
  const statusText = isTrialActive
    ? displayCredits === 0
      ? "Trial Exhausted"
      : "Free Trial"
    : "Active Plan: Growth";

  const statusChipColor =
    isTrialActive && displayCredits > 0
      ? "bg-indigo-100 text-indigo-700"
      : displayCredits === 0
      ? "bg-red-100 text-red-700"
      : "bg-green-100 text-green-700";

  const buttonText =
    displayCredits === 0 ? "Upgrade to Recharge" : "Get More Credits";
  const buttonStyle =
    displayCredits === 0
      ? "bg-red-500 hover:bg-red-600"
      : "bg-green-500 hover:bg-green-600";

  const submitHandler = async (e: React.FormEvent) => {

    // console.log("submit handler clicked");
    if (currentUser === null || !firebaseDB) {
      console.log("curren user is null or firebasDB is");
      return;
    }
    e.preventDefault();
    if (userExistance === false) {
      //Fire DB base works> (databasereference, collection, documents, fields)
      await setDoc(doc(firebaseDB, "users", currentUser.uid), user);
      setUserExistance(() => true);
      pushMessage("Profile Has been updated");
    }
    setIsTrialActive(() => true);
    console.log("Updated user:", user);
  };

 const isMarketingStartedHandler= async () => {
    if(userExistance===true){
      console.log('user exist and trying to get marketing starrted')
      // const userRef =  doc(firebaseDB, "users", currentUser.uid);
      // await updateDoc(userRef, {isMarketingStarted: true})
      // setMarketingStarted(()=> true);
      pushMessage("We are currently in Beta mode, Our team will soon try to contact you")
      if(currentUser.email)
        await axios.post('/API/send-mail',{fullname:currentUser.displayName, email:currentUser.email, message:"is trying to start marketing"})
    }
  }

  return (
    <div className="max-w-5xl mx-auto p-6 sm:p-10 bg-gray-50 min-h-screen">
      <div className="top-0 right-0 absolute">
      <MessageRenderer/>
      </div>
      <div
        className="p-[20px] text-7xl text-gray-600 top-0 left-0 z-[1] absolute cursor-pointer active:scale-[0.95] "
        onClick={() => router.back()}
      >
        <GiReturnArrow />
      </div>

      <h1 className="text-3xl relative font-extrabold z-[100] text-gray-900 mb-8 text-center">
        My Account & Usage
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Profile + Form */}
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
          {/* Profile */}
          {photoUrl ? (
            <Image
              src={photoUrl}
              alt={displayName}
              width={30}
              height={30}
              className="w-20 h-20 overflow-hidden rounded-full object-cover shadow-md mb-4"
            />
          ) : (
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-indigo-500 text-white text-3xl font-bold mb-4">
              {displayName[0]}
            </div>
          )}

          <h2 className="text-xl font-semibold text-gray-800">{displayName}</h2>
          <p className="text-sm text-gray-500 mb-3">{email}</p>
          <span
            className={`px-3 py-1 text-xs font-semibold rounded-full ${statusChipColor}`}
          >
            {statusText}
          </span>

          <p className="mt-4 w-full text-left text-xs text-gray-600 font-medium">
            Unique ID
          </p>
          <p className="font-mono text-black text-xs break-all bg-gray-100 p-2 rounded-lg mb-6">
            {currentUser.uid}
          </p>

          {/* Form */}
          {userExistance === false && (
            <form
              onSubmit={submitHandler}
              className="w-full space-y-3 bg-gray-50 p-4 rounded-lg"
            >
              {[
                ["fullname", "Full Name", "JOHN DOE"],
                ["brandname", "Brand Name", "LeadZup"],
                ["Contactnumber", "Contact Number", "+91 98765 43210"],
                ["address", "Address", "address"],
                ["whatsappNo", "For WhatsApp Updates", "+91 98765 43210"],
              ].map(([key, label, placeholder]) => (
                <div key={key}>
                  <label className="block text-sm font-semibold text-gray-700">
                    {label}
                  </label>
                  <input
                    type="text"
                    name={key}
                    placeholder={placeholder}
                    required
                    onChange={(e) =>
                      setUser((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value.trim(),
                      }))
                    }
                    className="mt-1 w-full text-gray-900 rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                  />
                </div>
              ))}
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md mt-3 active:scale-[0.95] cursor-pointer"
              >
                Update Profile & Get 50 trial Credits
              </button>
            </form>
          )}
        </div>

        {/* Right: Credit & Subscription */}
        <div className="bg-white p-8 rounded-xl shadow-md gap-5 flex flex-col">
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <h3 className="text-2xl font-bold text-gray-800">
              Current Credit Balance
            </h3>
            <div className="flex items-baseline space-x-1">
              <span className="text-5xl font-extrabold text-indigo-600">
                {displayCredits.toLocaleString()}
              </span>
              <span className="text-lg text-gray-500">Credits</span>
            </div>
          </div>

          {/* Action Section */}
          <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200 mb-4">
            {displayCredits === 0 && (
              <p className="text-sm text-red-700 font-semibold">
                Your balance is zero. Recharge to continue using services.
              </p>
            )}
          </div>

          <button
            className={`${buttonStyle} w-full py-3 rounded-lg text-white font-sans shadow-md transition duration-150`}
            onClick={()=>router.push('/pricing')}
          >
            {buttonText}
          </button>

          {isMarketingStarted === false && (
            <button
              className={`${buttonStyle} w-full py-3 rounded-lg text-white font-sans shadow-md transition duration-150 active:scale-[0.95]`}
              onClick={()=>isMarketingStartedHandler()}
            >
              Let's get started.
            </button>
          )}

          {/* Sign Out */}
          <div className="mt-8 border-t pt-6 flex justify-end">
            <button
              onClick={signouthandler}
              className="text-gray-500 hover:text-red-600 flex items-center text-sm font-medium"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Sign Out of LeadZup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
