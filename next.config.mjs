// Using ES Module syntax for Next.js configuration
const nextConfig = {
    async headers() {
      return [
        {
          source: '/api/:slug*', 
          headers: [
            {
              key: 'Cache-Control',
              value: 'no-store',
            },
          ],
        },
      ];
    },
  };
  
  // Export the configuration using ES Module syntax
  export default nextConfig;
  