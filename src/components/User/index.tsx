import { memo } from "react";
import { FiMail, FiUser } from "react-icons/fi";
import { Container } from "./styles";

interface UserProps {
  name?: string | null;
  email?: string | null;
}

function UsersComponent({ name, email }: UserProps) {
  return (
    <Container>
      <li>
        <h2>
          <span><FiUser size={20} color="#187BD1" /> </span>
          {name}
        </h2>
        <p>
          <span><FiMail size={20} color="#187BD1" /></span>
          {email}
        </p>
      </li>
    </Container>
  )
}

export const Users = memo(UsersComponent);