
import Button from "@modules/common/components/button"

const OnboardingCta = ({ orderId }: { orderId: string }) => {
  const resetOnboarding = () => {
    window.sessionStorage.setItem("onboarding", "false")
  }

  return (
    <div className="max-w-4xl h-full bg-white w-full mb-4">
      <div className="flex flex-col gap-y-6 center p-10 md:items-center">
        <span className="text-gray-700 text-xl">
          Tu orden de prueba se creo exitosamente! 🎉
        </span>
        <span className="text-gray-700 text-small-regular">
          Ya puedes completar la configuracion de tu tienda en el panel de administración.
        </span>
        <a
          href={`http://localhost:7001/a/orders/${orderId}`}
          onClick={resetOnboarding}
        >
          <Button className="md:w-80">Completa la configuración en el panel</Button>
        </a>
      </div>
    </div>
  )
}

export default OnboardingCta
