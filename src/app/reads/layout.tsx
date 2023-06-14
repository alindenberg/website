export const metadata = {
  title: 'Reads',
  description: "Checkout what I'm reading.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>{children}</div>
  )
}
