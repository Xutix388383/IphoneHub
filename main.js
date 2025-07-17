// Data (formerly from lib/tools.ts)
const sideloadIPADownloads = [
  { name: "Sideload App 1", link: "#", description: "A popular utility app, requires a sideloading tool." },
  { name: "Sideload Game 2", link: "#", description: "An exciting game, use a sideloading tool for installation." },
  { name: "Sideload Tool 3", link: "#", description: "A system utility, manual signing might be needed." },
  { name: "Sideload App 4", link: "#", description: "Another useful application for your device." },
  { name: "Sideload Game 5", link: "#", description: "A modern game, requires sideloading." },
  { name: "Sideload Utility 6", link: "#", description: "Advanced utility for device management." },
  { name: "Sideload App 7", link: "#", description: "Productivity app, sideload for extended features." },
  { name: "Sideload Game 8", link: "#", description: "Action-packed game, sideload for custom experience." },
]

const directInstallIPADownloads = [
  { name: "Direct Install App A", link: "#", description: "No computer needed, install directly from Safari." },
  { name: "Direct Install Game B", link: "#", description: "Simple one-tap install, great for quick fun." },
  { name: "Direct Install Utility C", link: "#", description: "Handy tool, bypasses traditional sideloading." },
  { name: "Direct Install App D", link: "#", description: "Another direct install option for convenience." },
  { name: "Direct Install Game E", link: "#", description: "Easy to install game, no sideloading required." },
]

const tools = [
  {
    slug: "icon-packs",
    name: "Icon Packs",
    description: "Transform your home screen with stunning icon themes.",
    longDescription:
      "Dive into an expansive collection of icon packs designed to give your iPhone a fresh, unique, and personalized look. From sleek minimalist designs to vibrant artistic sets, you'll find the perfect match to express your style. Each pack is meticulously crafted for high resolution displays, ensuring crisp and clear visuals.",
    features: [
      "Thousands of unique icons",
      "Various artistic styles",
      "Easy application via shortcuts or dedicated apps",
      "Regular updates with new icons",
    ],
    compatibility: ["iOS 14 and above", "iPhone 8 and newer"],
    installationSteps: [
      "Download your preferred icon pack.",
      "Use the Shortcuts app to create custom app icons.",
      "Alternatively, use a third-party icon changer app for easier application.",
      "Enjoy your new themed home screen!",
    ],
    screenshots: [
      { src: "/placeholder.svg?height=400&width=600", alt: "Icon Pack Screenshot 1" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Icon Pack Screenshot 2" },
    ],
  },
  {
    slug: "widget-creators",
    name: "Widget Creators",
    description: "Design custom widgets for your Lock Screen and Home Screen.",
    longDescription:
      "Unleash your creativity and personalize your iPhone like never before with powerful widget creation tools. Design custom widgets for your Lock Screen and Home Screen, displaying information exactly how you want it. From weather and calendar to custom text and images, the possibilities are endless.",
    features: [
      "Drag-and-drop interface",
      "Rich customization options (fonts, colors, layouts)",
      "Support for various data sources",
      "Pre-built templates for quick start",
    ],
    compatibility: ["iOS 14 and above", "All iPhone models"],
    installationSteps: [
      "Download and install the widget creator app from the App Store.",
      "Open the app and start designing your custom widget.",
      "Add the widget to your Home Screen or Lock Screen via the widget gallery.",
      "Customize and enjoy!",
    ],
    screenshots: [
      { src: "/placeholder.svg?height=400&width=600", alt: "Widget Creator Screenshot 1" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Widget Creator Screenshot 2" },
    ],
  },
  {
    slug: "wallpaper-collections",
    name: "Wallpaper Collections",
    description: "Browse high-resolution wallpapers optimized for iPhone displays.",
    longDescription:
      "Find the perfect backdrop for your device with our extensive collection of high-quality wallpapers, updated regularly. Our wallpapers are optimized for all iPhone displays, ensuring crisp details and vibrant colors. Explore categories from abstract art to stunning landscapes and minimalist designs.",
    features: [
      "Thousands of high-resolution wallpapers",
      "Categorized for easy browsing",
      "Daily updates",
      "Favorites and download options",
    ],
    compatibility: ["All iOS versions", "All iPhone models"],
    installationSteps: [
      "Browse the collection and select your favorite wallpaper.",
      "Download the image to your Photos app.",
      "Go to Settings > Wallpaper > Choose a New Wallpaper.",
      "Set it as your Lock Screen, Home Screen, or both.",
    ],
    screenshots: [
      { src: "/placeholder.svg?height=400&width=600", alt: "Wallpaper Collection Screenshot 1" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Wallpaper Collection Screenshot 2" },
    ],
  },
  {
    slug: "vpn-for-ios",
    name: "VPN for iOS (Anti-Revoke)",
    description: "Secure your online activity and prevent IPA revokes with specialized VPNs.",
    longDescription:
      "Discover VPN services specifically designed for iOS that not only secure your internet connection but also help bypass certificate revocations for sideloaded IPAs. These services can provide a layer of protection against app revokes, ensuring your favorite apps remain installed and functional. Please note that specific VPN recommendations and their anti-revoke effectiveness can vary and require independent research.",
    features: [
      "Enhanced online privacy and security",
      "Bypass geo-restrictions",
      "Potential anti-revoke technology for sideloaded apps",
      "Fast and stable connections",
      "No-log policies (for reputable services)",
    ],
    compatibility: ["iOS 12 and above", "All iPhone models"],
    installationSteps: [
      "Research and choose a reputable VPN service that offers anti-revoke features.",
      "Download their official app from the App Store.",
      "Sign up or log in to your account.",
      "Enable any anti-revoke or bypass features within the VPN settings.",
      "Connect to a server and enjoy secure browsing and potentially protected IPAs!",
    ],
    screenshots: [
      { src: "/placeholder.svg?height=400&width=600", alt: "VPN App Screenshot 1" },
      { src: "/placeholder.svg?height=400&width=600", alt: "VPN App Screenshot 2" },
    ],
  },
  {
    slug: "jailbreak-tweaks",
    name: "Jailbreak Tweaks",
    description: "Explore powerful modifications for jailbroken iPhones.",
    longDescription:
      "Unlock the full potential of your jailbroken iPhone with an extensive collection of tweaks. From subtle UI enhancements to groundbreaking new features, these modifications allow you to customize your device far beyond Apple's limitations. Discover tweaks for themes, system behavior, app functionality, and more.",
    features: [
      "Vast library of tweaks",
      "Categorized for easy discovery",
      "Enhance UI, add features, improve performance",
      "Community-vetted and popular choices",
    ],
    compatibility: ["Jailbroken iOS devices", "Varies by tweak and iOS version"],
    installationSteps: [
      "Ensure your device is jailbroken.",
      "Open Cydia, Sileo, or your preferred package manager.",
      "Add trusted tweak repositories (if not already added).",
      "Search for your desired tweak and install it.",
      "Respring your device to apply changes.",
    ],
    screenshots: [
      { src: "/placeholder.svg?height=400&width=600", alt: "Jailbreak Tweak Screenshot 1" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Jailbreak Tweak Screenshot 2" },
    ],
  },
]

// Helper function to create a card element
function createCardElement(title, description, contentHtml, isClickable = false, link = "#") {
  const card = document.createElement("div")
  card.className = `card ${isClickable ? "clickable" : ""}`
  if (isClickable) {
    card.onclick = () => (window.location.href = link)
  }

  card.innerHTML = `
        <div class="card-header">
            <h3 class="card-title">${title}</h3>
            <p class="card-description">${description}</p>
        </div>
        <div class="card-content">
            ${contentHtml}
        </div>
    `
  return card
}

// Helper function to create a download card element
function createDownloadCardElement(download) {
  const card = document.createElement("div")
  card.className = "card bg-gray-900 border-gray-700 text-gray-50" // Specific styling for download cards
  card.innerHTML = `
        <div class="card-header">
            <h4 class="card-title text-lg">${download.name}</h4>
            ${download.description ? `<p class="card-description">${download.description}</p>` : ""}
        </div>
        <div class="card-content">
            <a href="${download.link}" target="_blank" rel="noopener noreferrer" class="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                Download
            </a>
        </div>
    `
  return card
}

// Function to render content for a given tab
function renderTabContent(tabName) {
  const ipasContent = document.getElementById("tab-content-ipas")
  const vpnContent = document.getElementById("tab-content-vpn-for-ios")
  const tweaksContent = document.getElementById("tab-content-jailbreak-tweaks")

  // Hide all tab contents
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active")
  })

  // Clear previous content of current tab before rendering new
  if (ipasContent) ipasContent.innerHTML = "";
  if (vpnContent) vpnContent.innerHTML = "";
  if (tweaksContent) tweaksContent.innerHTML = "";


  if (tabName === "ipas") {
    const sideloadSection = document.createElement("div")
    sideloadSection.className = "card bg-gray-800 border-gray-700 text-gray-50 mb-8"
    sideloadSection.innerHTML = `
            <div class="card-header">
                <h3 class="card-title">IPA Links (Sideload)</h3>
                <p class="card-description text-orange-400">
                    These IPAs require a sideloading tool (e.g., AltStore, Sideloadly) for installation.
                </p>
            </div>
            <div class="card-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
        `
    const sideloadGrid = sideloadSection.querySelector(".card-content")
    sideloadIPADownloads.forEach((download) => {
      sideloadGrid.appendChild(createDownloadCardElement(download))
    })
    ipasContent.appendChild(sideloadSection)

    const directInstallSection = document.createElement("div")
    directInstallSection.className = "card bg-gray-800 border-gray-700 text-gray-50"
    directInstallSection.innerHTML = `
            <div class="card-header">
                <h3 class="card-title">Direct Install IPAs</h3>
                <p class="card-description text-green-400">
                    These IPAs can be installed directly on your device without a computer or sideloading tools.
                </p>
            </div>
            <div class="card-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
        `
    const directInstallGrid = directInstallSection.querySelector(".card-content")
    directInstallIPADownloads.forEach((download) => {
      directInstallGrid.appendChild(createDownloadCardElement(download))
    })
    ipasContent.appendChild(directInstallSection)
  } else if (tabName === "vpn-for-ios") {
    const vpnTool = tools.find((tool) => tool.slug === "vpn-for-ios")
    if (vpnTool) {
      const cardContent = `
                <p class="text-gray-300">${vpnTool.longDescription}</p>
                <h4 class="text-lg font-semibold text-gray-200 mb-2 mt-4">Key Features</h4>
                <ul class="list-disc list-inside space-y-2 text-gray-300">
                    ${vpnTool.features.map((f) => `<li>${f}</li>`).join("")}
                </ul>
                <h4 class="text-lg font-semibold text-gray-200 mb-2 mt-4">Installation Steps</h4>
                <ol class="list-decimal list-inside space-y-2 text-gray-300">
                    ${vpnTool.installationSteps.map((s) => `<li>${s}</li>`).join("")}
                </ol>
                <h4 class="text-lg font-semibold text-gray-200 mb-2 mt-4">Compatibility</h4>
                <div class="flex flex-wrap gap-2">
                    ${vpnTool.compatibility.map((c) => `<span class="badge">${c}</span>`).join("")}
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    ${vpnTool.screenshots
                      .map(
                        (s) => `
                        <div class="relative w-full h-48 rounded-lg overflow-hidden">
                            <img src="${s.src}" alt="${s.alt}" />
                        </div>
                    `,
                      )
                      .join("")}
                </div>
            `
      vpnContent.appendChild(createCardElement(vpnTool.name, vpnTool.description, cardContent))
    }
  } else if (tabName === "jailbreak-tweaks") {
    const tweaksTool = tools.find((tool) => tool.slug === "jailbreak-tweaks")
    if (tweaksTool) {
      const cardContent = `
                <p class="text-gray-300">${tweaksTool.longDescription}</p>
                <h4 class="text-lg font-semibold text-gray-200 mb-2 mt-4">Key Features</h4>
                <ul class="list-disc list-inside space-y-2 text-gray-300">
                    ${tweaksTool.features.map((f) => `<li>${f}</li>`).join("")}
                </ul>
                <h4 class="text-lg font-semibold text-gray-200 mb-2 mt-4">Installation Steps</h4>
                <ol class="list-decimal list-inside space-y-2 text-gray-300">
                    ${tweaksTool.installationSteps.map((s) => `<li>${s}</li>`).join("")}
                </ol>
                <h4 class="text-lg font-semibold text-gray-200 mb-2 mt-4">Compatibility</h4>
                <div class="flex flex-wrap gap-2">
                    ${tweaksTool.compatibility.map((c) => `<span class="badge">${c}</span>`).join("")}
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    ${tweaksTool.screenshots
                      .map(
                        (s) => `
                        <div class="relative w-full h-48 rounded-lg overflow-hidden">
                            <img src="${s.src}" alt="${s.alt}" />
                        </div>
                    `,
                      )
                      .join("")}
                </div>
            `
      tweaksContent.appendChild(createCardElement(tweaksTool.name, tweaksTool.description, cardContent))
    }
  }

  // Show the active tab content
  document.getElementById(`tab-content-${tabName}`).classList.add("active")
}

// Event Listeners for Tabs
document.addEventListener("DOMContentLoaded", () => {
  const tabTriggers = document.querySelectorAll(".tab-trigger")
  tabTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      // Remove active class from all triggers
      tabTriggers.forEach((t) => t.classList.remove("active"))
      // Add active class to clicked trigger
      trigger.classList.add("active")
      // Render content for the selected tab
      renderTabContent(trigger.dataset.tab)
    })
  })

  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Initial render for the default tab (IPAs)
  renderTabContent("ipas")
})
