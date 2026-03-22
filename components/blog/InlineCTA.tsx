import { ButtonGlow } from '../ui/ButtonGlow'

export function InlineCTA({
  title = 'Tu veux ce pipeline pour ta boîte ?',
  subtitle = 'On met en place le double filtrage + setter en 14 jours.',
  buttonText = 'Réserver un appel stratégique →',
  href = '#contact'
}: { title?: string; subtitle?: string; buttonText?: string; href?: string }) {
  return (
    <div className="my-8 p-6 bg-[#C87533]/[0.06] border border-[#C87533]/[0.15] rounded-xl text-center">
      <p className="text-text-primary font-semibold text-base mb-1">{title}</p>
      <p className="text-text-secondary text-sm mb-4">{subtitle}</p>
      <ButtonGlow as="a" href={href}>{buttonText}</ButtonGlow>
    </div>
  )
}
