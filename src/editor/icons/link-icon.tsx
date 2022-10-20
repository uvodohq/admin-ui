import type { SVGProps } from 'react'

export function LinkIcon(props: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={props?.size || 20}
      height={props?.size || 20}
      viewBox="0 0 256 256"
      {...props}>
      <path
        fill="currentColor"
        d="M225.3 82.7a51.8 51.8 0 0 1-15.3 36.8l-28.3 28.3a52 52 0 0 1-73.5 0a8 8 0 1 1 11.3-11.3a36.1 36.1 0 0 0 50.9 0l28.3-28.3a36 36 0 1 0-50.9-50.9L128 77.1a8 8 0 0 1-11.3-11.3L136.5 46a52.1 52.1 0 0 1 88.8 36.7ZM128 178.9l-19.8 19.8a36 36 0 0 1-50.9-50.9l28.3-28.3a36.1 36.1 0 0 1 50.9 0a8 8 0 0 0 11.3-11.3a52 52 0 0 0-73.5 0L46 136.5a52 52 0 1 0 73.5 73.5l19.8-19.8a8 8 0 0 0-11.3-11.3Z"></path>
    </svg>
  )
}
