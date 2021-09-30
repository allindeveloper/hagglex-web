
const menuitems :any = [

    {
      id: "dashboard",
      title: "Dashboard",
      type: "item",
      url: "/app/dashboard",
      icon: "fi-rr-home",
      auth :"CanViewDashboard",
      description:"this is what your dashboard looks like today",
    },
    {
      id: "wallet",
      title: "Wallet",
      type: "item",
      url: "/app/wallet",
      icon: "fi-rr-stats",
      auth :"CanViewWallet",
      description:"here is the list of all the transaction you’ve performed"
    },
    {
      id: "otc",
      title: "OTC",
      type: "item",
      url: "/app/otc/",
      icon: "fi-rr-settings-sliders",
      auth :"CanViewSettings"
    },
    {
      id: "Savings",
      title: "Savings",
      url: "/app/savings/",
      description:"Savings Page",
    },
    {
      id: "more",
      title: "More",
      url: "/app/more/",
      description:"More Page",
    },
    {
      id: "Signup",
      title: "Sign Up",
      url:"/sign-up",
      description:"Sign Up Page",
      show:false
    },
  ]
export default menuitems
