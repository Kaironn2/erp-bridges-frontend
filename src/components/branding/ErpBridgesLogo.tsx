import { erpBridgesLogoPath } from '@/assets/erp-bridges-logo/erp-bridges-logo';

type ErpBrdigesLogoProps = {
  width: number;
  height: number;
  withText?: boolean;
  color?: string;
};

export function ErpBrdigesLogo({
  width,
  height,
  withText = false,
  color = 'currentColor',
}: ErpBrdigesLogoProps) {
  return (
    <div className="relative">
      <svg
        width={width}
        height={height}
        viewBox="0 0 781 415"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={erpBridgesLogoPath} fill={color} fillRule="evenodd" />
      </svg>

      {withText && (
        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap text-2xl font-bold text-text-primary">
          ERP Bridges
        </span>
      )}
    </div>
  );
}
