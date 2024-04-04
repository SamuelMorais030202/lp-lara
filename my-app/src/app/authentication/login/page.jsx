import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    router.push('/')
  }, [])

  return (
    <div>
      <h1>Teste login</h1>
    </div>
  )
}