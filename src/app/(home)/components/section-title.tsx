import { ComponentProps } from "react";

const sectionTitle = ({ children, ...props }: ComponentProps<"p">) => {
  return (
    <p className="font-semibold uppercase m-4" { ...props}>
      {children}
    </p>
  )
}

export default sectionTitle