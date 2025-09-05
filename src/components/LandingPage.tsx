'use client'

import React from 'react'
import Link from 'next/link'
import { BondLogo } from './BondLogo'
import { Button } from './ui/Button'
import { links } from '@/lib/links'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-brand">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 max-w-app">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BondLogo size="md" />
            <span className="text-xl font-bold text-gray-900"></span>
          </div>
          
          <div className="hidden tablet:flex items-center gap-6">
            <a href="#features" className="text-gray-800 hover:text-gray-900 font-medium transition-colors">
              Features
            </a>
            <a href="#about" className="text-gray-800 hover:text-gray-900 font-medium transition-colors">
              About
            </a>
            <Link href={links.app} target="_blank">
              <Button variant="primary" size="md">
                Launch App
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="tablet:hidden">
            <Link href={links.app} target="_blank">
              <Button variant="primary" size="sm">
                Launch App
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 max-w-app">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl tablet:text-5xl desktop:text-6xl font-black text-gray-900 leading-tight">
              Decentralized Limit Orders
              <br />
              <span className="text-gray-700">on Monad</span>
            </h1>
            
            <p className="text-lg tablet:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Trade with precision using automated limit orders powered by Uniswap V3. 
              Set your target price and let BOND execute your trades when the market hits your conditions.
            </p>
          </div>

          <div className="flex flex-col tablet:flex-row gap-4 justify-center items-center">
            <Link href={links.app} target="_blank">
              <Button variant="primary" size="lg" className="w-full tablet:w-auto">
                Start Trading
              </Button>
            </Link>
            <Button variant="secondary" size="lg" className="w-full tablet:w-auto">
              View Docs
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-4 max-w-app">
          <div className="text-center mb-12">
            <h2 className="text-3xl tablet:text-4xl font-bold text-gray-900 mb-4">
              Why Choose BOND?
            </h2>
            <p className="text-lg text-gray-700 max-w-xl mx-auto">
              Built for traders who demand precision and reliability
            </p>
          </div>

          <div className="grid tablet:grid-cols-2 desktop:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-gray-900 rounded-lg mx-auto flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Lightning Fast</h3>
              <p className="text-gray-700">
                Execute trades instantly when your conditions are met with Monad&apos;s high-performance blockchain
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-gray-900 rounded-lg mx-auto flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Secure & Trustless</h3>
              <p className="text-gray-700">
                Your funds remain in your wallet until execution. No intermediaries, no counterparty risk
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-gray-900 rounded-lg mx-auto flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Low Fees</h3>
              <p className="text-gray-700">
                Trade with minimal fees thanks to Monad&apos;s efficient and cost-effective infrastructure
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-gray-900 rounded-lg mx-auto flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Uniswap V3</h3>
              <p className="text-gray-700">
                Built on top of Uniswap V3 infrastructure for maximum liquidity and optimal price execution
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4 max-w-app">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 tablet:p-12">
            <div className="grid tablet:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl tablet:text-4xl font-bold text-gray-900">
                  Built for Monad
                </h2>
                <p className="text-lg text-gray-700">
                  BOND leverages Monad&apos;s parallel EVM architecture with Uniswap V3&apos;s concentrated liquidity to deliver unprecedented speed and efficiency. 
                  Our limit order system monitors V3 pools in real-time, ensuring your trades execute exactly when and how you want them to.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                    <span className="text-gray-800">10,000+ TPS capability</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                    <span className="text-gray-800">1-second block finality</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                    <span className="text-gray-800">EVM compatible</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <BondLogo size="lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-app">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 tablet:p-12 text-center">
            <div className="space-y-6">
              <h2 className="text-3xl tablet:text-4xl font-bold text-gray-900">
                Ready to Start Trading?
              </h2>
              <p className="text-lg text-gray-700 max-w-xl mx-auto">
                Join traders who are already using BOND to execute precise limit orders on Monad
              </p>
              <div className="flex flex-col tablet:flex-row gap-4 justify-center items-center">
                <Link href={links.app} target="_blank">
                  <Button variant="primary" size="lg" className="w-full tablet:w-auto">
                    Launch BOND App
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800/20">
        <div className="container mx-auto px-4 max-w-app">
          <div className="flex flex-col tablet:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <BondLogo size="sm" />
              <div className="text-center tablet:text-left">
                <p className="font-semibold text-gray-900">BOND</p>
                <p className="text-sm text-gray-700">Limit Orders on Monad</p>
              </div>
            </div>
            
            <div className="flex gap-6 text-sm text-gray-700">
              <a href={links.docs} className="hover:text-gray-900 transition-colors">Docs</a>
              <a href={links.github} className="hover:text-gray-900 transition-colors">GitHub</a>
              <a href={links.discord} className="hover:text-gray-900 transition-colors">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
