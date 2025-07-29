import type { NextConfig } from "next";
 {/*allowing images from all url, basically trusting all the urls*/}
const nextConfig: NextConfig = {
 
  images:{ 
     dangerouslyAllowSVG:true,
    remotePatterns:[{
      protocol:'https',
      hostname:'*',
    }
    ]
  },
  experimental :{
    ppr :'incremental',
    after : true
  },
  devIndicators:{
    appIsrStatus : true , 
    buildActivity : true , 
    buildActivityPosition : 'bottom-right'
  }
};

export default nextConfig;
