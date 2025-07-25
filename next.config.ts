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
  }
};

export default nextConfig;
