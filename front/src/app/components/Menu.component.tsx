import { ButtonStandard } from ".";

export const Menu = () => {
  return (
    <div className="w-[90vw] lg:w-[70vw] h-[200px] bg-secondary-orange flex flex-col gap-2 justify-center items-center *:w-[200px] sm:*:w-[300px] m-auto">
      <ButtonStandard tertiary route="subscriptions">
        La Huerta <span className="italic font-medium">Box</span>
      </ButtonStandard>
      <ButtonStandard tertiary route="catalog">
        Productos del Mes
      </ButtonStandard>
      <ButtonStandard primary route="login">
        Iniciar Sesión
      </ButtonStandard>
    </div>
  );
};
