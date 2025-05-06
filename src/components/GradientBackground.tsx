
function GradientBackground() {
  return (
    <div className=" flex items-end relative justify-end object-contain w-[90vw] xl:h-[60vh]  lg:h-[50vh] md:h-[40vh]  "      >
        <svg
        className="w-full h-full absolute bottom-0" // Full width, fixed height
        viewBox="0 0 1783 794"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none" // Optional: prevent scaling behavior
      >
        <path
          d="M0 448.455C0 421.807 18.4628 398.716 44.4573 392.852L1786 0V793H57C25.5198 793 0 767.48 0 736V448.455Z"
          fill="url(#paint0_linear_5792_2652)"
        />
        <path
          d="M378.338 318.172L678.824 250L468.032 793.172H180L378.338 318.172Z"
          fill="url(#paint1_linear_5792_2652)"
        />
        <path
          d="M678.221 250L1008.61 175.5L771.408 793L457.961 793.172L678.221 250Z"
          fill="url(#paint2_linear_5792_2652)"
        />

        <defs>
          <linearGradient
            id="paint0_linear_5792_2652"
            x1="1655.44"
            y1="140"
            x2="1526.06"
            y2="618.782"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#17A4AD" />
            <stop offset="1" stop-color="#3DBCAA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_5792_2652"
            x1="451.588"
            y1="671"
            x2="691.997"
            y2="250.694"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3EBDAB" />
            <stop offset="1" stop-color="#18A5AD" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_5792_2652"
            x1="799.314"
            y1="637.5"
            x2="956.216"
            y2="208.338"
            gradientUnits="userSpaceOnUse"
          >
            
            <stop stop-color="#3EBDAB" />
            <stop offset="1" stop-color="#18A5AD" />
          </linearGradient>

          <linearGradient
            id="paint2_linear_5792_2652"
            x1="899.314"
            y1="559.5"
            x2="1126.216"
            y2="158.338"
            gradientUnits="userSpaceOnUse"
          >
            
            <stop stop-color="#3EBDAB" />
            <stop offset="1" stop-color="#18A5AD" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default GradientBackground;
