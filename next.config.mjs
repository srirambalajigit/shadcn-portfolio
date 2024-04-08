/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
		serverActions: {
			allowedOrigins: ['humble-space-disco-4w54pxw7qppfq5wp-3000.app.github.dev', 'localhost:3000']
		},
	}
};

export default nextConfig;
