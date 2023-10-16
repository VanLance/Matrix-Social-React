import Body from "../components/Body";
import RegisterForm from '../components/forms/RegisterForm'

export default function FormPage() {
  return (
    <Body sidebar={false}>
      <RegisterForm />
    </Body>
  )
}
