import { Touchable } from '../../types';
import DesktopHeader from './Header';
import MobileHeader from './Header.mobile';

export type HeaderProps = {
  title: string;
  avatarUrl: string;
  mottoes: string[];
}

const Header = ({touch, ...rest}: HeaderProps & Touchable) => 
  touch ? <MobileHeader {...rest} /> : <DesktopHeader {...rest} />

export default Header;