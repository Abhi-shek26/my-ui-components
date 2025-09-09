export function clsx(...args: (string | boolean | undefined | null)[]) {
  return args.filter(Boolean).join(' ');
}
