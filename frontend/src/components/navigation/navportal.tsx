import { NavItem } from './navitem';

export const NavPortal = (): JSX.Element => (
    <div className="flex items-center justify-end gap-4 px-8 py-2 bg-navy-light">
        <NavItem
            buttonType="portalButton"
            name="Apply Now"
            location="application"
            disabled={true}
        />
        <NavItem
            buttonType="portalButton"
            name="Resident Portal"
            location="portal"
            disabled={true}
        />
    </div>
);
