import ClinetWrapper from "@/components/ClientWrapper";

export default function Home() {
  const bundles = [
    {
      name: 'Basic',
      description: 'Basic bundle lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 100,
    },
    {
      name: 'Standard',
      description: 'Standard bundle lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 200,
    },
    {
      name: 'Premium',
      description: 'Premium bundle lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 300,
    },
  ]
  return (
    <div>
      <ClinetWrapper data={bundles}/>
    </div>
  )
}
