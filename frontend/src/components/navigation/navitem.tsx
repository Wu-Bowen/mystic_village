import { useNavigate } from 'react-router-dom';
import { ModernButton } from '../ModernButton';

interface NavItemProps {
  name: string;
  isMobile?: boolean;
  buttonType?: string;
  location?: string;
  disabled?: boolean;
  onClickCallback?: () => void;
}

export const NavItem = ({
  isMobile,
  name,
  buttonType,
  location,
  disabled,
  onClickCallback,
}: NavItemProps): JSX.Element => {
  const navigate = useNavigate();

  const linkClicked = (location: string): void => {
    navigate(location);
  };

  if (buttonType === 'portalButton') {
    return disabled ? (
      <div title="Currently Under Development" className="inline-block">
        <ModernButton
          onClick={() => {
            linkClicked(location);
            onClickCallback?.();
          }}
          disabled={disabled}
          className="portal-button"
        >
          {name}
        </ModernButton>
      </div>
    ) : (
      <ModernButton
        onClick={() => {
          linkClicked(location);
          onClickCallback?.();
        }}
        className="portal-button"
        disabled={disabled}
      >
        {name}
      </ModernButton>
    );
  }

  return (
    <button
      className={`
        ${
          isMobile
            ? 'text-2xl my-8 text-gold hover:text-gold-light'
            : 'text-base mx-4 text-navy hover:text-gold'
        }
        bg-transparent border-none cursor-pointer px-4 py-2
        transition-all duration-300 font-semibold
        relative after:absolute after:bottom-0 after:left-0 after:right-0
        after:h-0.5 after:bg-current after:scale-x-0 hover:after:scale-x-100
        after:transition-transform after:duration-300
      `}
      onClick={() => {
        linkClicked(location);
        onClickCallback?.();
      }}
      disabled={false}
    >
      {name}
    </button>
  );
};
