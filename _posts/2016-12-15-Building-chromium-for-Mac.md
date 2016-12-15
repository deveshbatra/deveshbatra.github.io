---
layout: post
title: Building Chromium for Mac (w/ XCode)
---

1. Check your system for:
  - 64-bit Mac running 10.9+
  - XCode 7.3+ (posed problems for me on an older version): xcodebuild -version
  - The OS X 10.10 SDK: ls `xcode-select -p`/Platforms/MacOSX.platform/Developer/SDKs
  - Git 2.11.0 (optional: I say this because with macs, git comes preinstalled and is generally not the latest. For this, we'll have another post soon.): git --version
 
 2. Install depot_tools [downloads in under 60s @ 900+ kbps]
  - depot_tools provides helpful tools for successful building and updation of Chromium: gn, ninja, fetch, rebase-update (for git), etc.
  - Clone depot_tools repo: git clone https://chromium.googlesource.com/chromium/tools/depot_tools.git
  - For temporary task, add depot_tools to the end of your PATH: export PATH=$PATH:/Users/$USER/depot_tools
  - Permanently: vim .bash_profile -> # Setting PATH for depot_tools -> export PATH=$PATH:/Users/$USER/depot_tools.
  
  3. Get the code [downloads in just over 2h @ 900+ kbps]
  - mkdir chromium && cd chromium
  - fetch chromium [if this doesn't work: you probably haven't set the path right in the previous step. Check: echo $PATH]
  - cd src
  
  Nothing tricky as yet. But our real challenge is debugging with XCode even if we can't build with it. Terminal is fine for building.
  
  CHECK step 6 before proceeding with step 4.
  
  4. Chromium uses Ninja as its main build tool along with a tool called GN to generate .ninja files. So GN assists the main build tool, i.e., Ninja.
  You can create any number of build directories with different configurations. 
   - To create a build directory: gn gen out/Debug -> Here, Debug is our build directory - we can create as many as we want [why would we?]
   - We can also use certain conditions like is_debug = 0 for a release build, but we can come back to check the Google page for that.
  
  5. Build Chromium [~60m]
    - ninja -C out/Default chrome

6. [... to be continued] --ide = xcode
