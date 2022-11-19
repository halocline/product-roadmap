import Link from 'next/link';
import {Anchor, Text} from './Grommet'
import {FormPrevious} from './grommet-icons'

export const ReverseAnchor = ({href, label}: {href: string, label:string}) => {
  return (
    <Link href={href}>
            <Anchor
              as={Text}
              label={label}
              icon={<FormPrevious />}
              gap="hair"
            />
          </Link>
  )
}