/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{
				hostname: "avatars.githubusercontent.com",
				port: "",
				pathname: "/u/**",
				protocol: "https",
			},
		],
	},
	async headers() {
		const headers = [];
		if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") {
			headers.push({
				headers: [
					{
						key: "X-Robots-Tag",
						value: "noindex",
					},
				],
				source: "/:path*",
			});
		}
		return headers;
	},
};

module.exports = nextConfig;
