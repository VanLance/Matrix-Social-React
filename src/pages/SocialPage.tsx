import Body from "../components/Body";

export default function SocialPage({ children }: { children: JSX.Element | JSX.Element[]}) {
  
  return (
    <Body sidebar>
      { children }
    </Body>
  )
}
