import { NavItem } from './navitem';

export const NavMenu = (): JSX.Element => {
    return (
        <div className="flex items-center gap-2">
            <NavItem name="Home" location="/" />
            <NavItem name="Our Community" location="community" />
            <NavItem name="Available Rentals" location="apartments" />
            <NavItem name="Contact Us" location="contact" />
        </div>
    );
};
