import React from "react";

import { Flex, FloatButton } from "antd";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import logo from "../assets/logo.png";
import google_page_speed from "../assets/google-page-speed.png";

const textStyle = "font-normal text-[16px] text-gray-600";
const btnStyle = "w-[34px] h-[34px] relative mx-[8px]";

export default function Footer() {
  return (
    <footer className="relative px-[105px]">
      <Flex vertical>
        <Flex gap={70} className="py-20">
          <Flex vertical className="w-[372px]">
            <Flex gap={2} align="center" className="font-inspiration">
              <img className="h-[15px] w-[21px]" src={logo} alt="logo" />
              Ik developers
            </Flex>
            <p className={`${textStyle} mt-6 leading-[30px]`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <img
              className="mt-9 w-[199px] h-[53px]"
              src={google_page_speed}
              alt="google page speed"
            />
          </Flex>
          <Flex vertical className="w-[140px]">
            <h1 className="font-bold text-gray-700 text-[18px]">Links</h1>
            <ul className="mt-6">
              <li className={`text-nowrap leading-9 ${textStyle}`}>About Us</li>
              <li className={`text-nowrap leading-9 ${textStyle}`}>Services</li>
              <li className={`text-nowrap leading-9 ${textStyle}`}>
                Case Studies
              </li>
              <li className={`text-nowrap leading-9 ${textStyle}`}>
                How it works
              </li>
              <li className={`text-nowrap leading-9 ${textStyle}`}>Blog</li>
              <li className={`text-nowrap leading-9 ${textStyle}`}>Careers</li>
              <li className={`text-nowrap leading-9 ${textStyle}`}>
                Areas We Serve
              </li>
            </ul>
          </Flex>
          <Flex vertical>
            <h1 className="font-bold text-gray-700 text-[18px]">Contact us</h1>
            <p className={`mt-6 leading-[30px] ${textStyle}`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className={`mt-5 ${textStyle}`}>+923183561921</p>
          </Flex>
          <Flex vertical justify="end" align="center">
            <Flex>
              <FloatButton
                className={btnStyle}
                icon={<FaFacebookF />}
                type="default"
              />
              <FloatButton
                className={btnStyle}
                type="default"
                icon={<FaInstagram />}
              />
              <FloatButton
                className={btnStyle}
                type="default"
                icon={<FaTwitter className="mx-auto w-[13px] h-[13px]" />}
              />
              <FloatButton
                className={btnStyle}
                type="default"
                icon={<FaLinkedinIn className="mx-auto w-[13px] h-[13px]" />}
              />
            </Flex>
          </Flex>
        </Flex>
        <hr className="-mx-[105px] border-[1px] border-gray-400" />
        <p className="text-center font-normal text-[14px] leading-[10px] text-gray-700 my-10">
          © 2023 Copyright by IK Developers. All rights reserved.
        </p>
      </Flex>
    </footer>
  );
}
