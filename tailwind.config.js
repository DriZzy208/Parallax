/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ima1': 'url("https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
        'ima2': 'url("https://i.ibb.co/ScPqCLk/52029743025-9f23b0ff45-o.jpg")',
        'ima3': 'url("https://i.ibb.co/dLnpQVm/52028124552-27f868d15f-o.jpg")'
      }
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "night",
  },
}
