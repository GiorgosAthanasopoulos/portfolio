import "./globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head />
			<body className="w-[100%] h-[100%]">{children}</body>
		</html>
	);
}
