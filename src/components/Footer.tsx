"use client"

import type React from "react"

const Footer: React.FC = () => {
  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle email submission logic here
  }

  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-sm mb-4 text-mint">COMPANY</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  WHY HANDKRAFTED
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  CAREERS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  SELL WITH US
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  PRESS KIT
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4 text-mint">LEARN MORE</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  BLOG
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  WHAT MAKES US DIFFERENT
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  WHOLESALE ENQUIRIES
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  CUSTOM COMMISSIONS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  HELP & FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4 text-mint">SITE</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  MY ACCOUNT
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  STORE LOCATOR
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  ONLINE RESOURCES
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  BLOG
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4 text-mint">FOLLOW US</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">Instagram</span>
                <div className="w-6 h-6 bg-gray-400 rounded">
                    <img src="/image/instagram.png" alt="Instagram" />
                </div>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">Facebook</span>
                <div className="w-6 h-6 bg-gray-400 rounded">
                    <img src="/image/facebook.png" alt="Facebook" />
                </div>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">Pinterest</span>
                <div className="w-6 h-6 bg-gray-400 rounded">
                    <img src="/image/pinterest.png" alt="pinterest" />
                </div>
              </a>
            </div>
            <p className="text-sm text-gray-600 mb-2">JOIN OUR MAILING LIST</p>
            <form onSubmit={handleEmailSubmit} className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-3 py-2 border border-gray-300 text-sm"
                required
              />
              <button type="submit" className="bg-mint text-white px-4 py-2 text-sm">
                GO
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="hover:text-gray-900">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-900">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-gray-900">
                Shipping & Returns
              </a>
              <a href="#" className="hover:text-gray-900">
                Contact Us
              </a>
            </div>
            <p>Copyright © 2024 Handkrafted Pty Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
