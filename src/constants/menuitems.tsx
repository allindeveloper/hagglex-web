
const menuitems :any = [

    {
      id: "dashboard",
      title: "Dashboard",
      type: "item",
      url: "/app/dashboard",
      icon: "fa-th-large",
      auth :"CanViewDashboard",
      description:"this is what your dashboard looks like today",
    },
    {
      id: "wallet",
      title: "Wallet",
      type: "item",
      url: "/app/wallet",
      icon: "fa-wallet",
      auth :"CanViewWallet",
      description:"here is the list of all the transaction you’ve performed"
    },
    {
      id: "otc",
      title: "OTC",
      type: "item",
      url: "/app/otc/",
      icon: "fa-coins",
      auth :"CanViewSettings"
    },
    {
      id: "Savings",
      title: "Savings",
      url: "/app/savings/",
      icon: "fa-piggy-bank",
      description:"Savings Page",
    },
    {
      id: "more",
      title: "More",
      url: "/app/more/",
      icon: "fa-plus-square",
      description:"More Page",
    },
    {
      id: "support",
      title: "Support",
      url:"/app/support",
      icon: "fa-comments",
      description:"Sign Up Page"
    },
  ]
export default menuitems
