import Items from "./Items"
import Close from "./Close"

import useStatus from '@/Store/useStatus'

const Sidebar = () => {
const { status } = useStatus()

  return (
    <aside className={status ? '' : 'close'}>
      <ul>
        <Close />
        <Items />
      </ul>
    </aside>
  )
}

export default Sidebar