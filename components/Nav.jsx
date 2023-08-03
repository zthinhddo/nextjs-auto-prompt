'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { getProviders, signIn, signOut } from 'next-auth/react';

const Nav = () => {
  const [isUserLogin, setUserLogin] = useState(true);
  const [providers, setProviders] = useState(null);
  const [isDropDown, setDropDown] = useState(false);

  useEffect(() => {
    const initProviders = async () => {
      const resp = await getProviders();

      initProviders(resp);
    };

    initProviders();
  }, []);

  return (
    <nav className="flex w-full justify-between mb-16 pt-3">
      {/* LOGO AREA (LEFT) */}
      <Link href="/" className="flex gap-2">
        <Image
          src="/assets/images/logo.svg"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text pt-[5px]">Logo</p>
      </Link>

      {/* MENU AND DROPDOWN (RIGHT) */}
      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        <div className="flex gap-3 md:gap-5">
          <Link href="/create-prompt" className="black_btn">
            Create Post
          </Link>

          {isUserLogin ? (
            <button
              type="button"
              className="outline_btn"
              onClick={() => {
                setUserLogin(false);
                signOut();
              }}
            >
              Sign Out
            </button>
          ) : (
            <button
              type="button"
              className="outline_btn"
              onClick={() => {
                signIn();
              }}
            >
              Sign In
            </button>
          )}

          <Link href="/profile">
            <Image
              src="assets/images/logo.svg"
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
            />
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative gap-3 md:gap-5">
        <div className="flex">
          <Image
            src="assets/images/logo.svg"
            width={37}
            height={37}
            className="rounded-full"
            alt="profile"
            onClick={() => setDropDown(!isDropDown)}
          />

          {isDropDown && (
            <div className="dropdown">
              <Link
                href="/profile"
                className="dropdown_link"
                onClick={() => setDropDown(false)}
              >
                My Profile
              </Link>
              <Link
                href="/create-prompt"
                className="dropdown_link"
                onClick={() => setDropDown(false)}
              >
                Create Prompt
              </Link>
              {isUserLogin ? (
                <button
                  type="button"
                  onClick={() => {
                    setUserLogin(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    signIn();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign In
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;