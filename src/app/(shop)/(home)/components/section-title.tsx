import { ComponentProps } from "react";

const SectionTitle = ({ children, ...props }: ComponentProps<"p">) => {
  return (
    <p className="font-semibold uppercase m-4" { ...props}>
      {children}
    </p>
  )
}

export default SectionTitle