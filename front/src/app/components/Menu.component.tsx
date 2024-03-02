import { ButtonStandard } from ".";

export const Menu = () => {
  return (
    <div className="bg-secondary-orange flex flex-col gap-2 justify-center items-center *:w-[200px] sm:*:w-[300px] m-auto py-3 md:py-4 lg:py-5 *:h-fit *:py-1 sm:*:py-2 *:text-xs *:sm:text-sm *:lg:text-base lg:h-[12.12rem] md:h-[12.12rem] sm:h-[12.12rem]">
      <ButtonStandard tertiary route="subscriptions">
        La Huerta <span className="italic font-medium">Box</span>
      </ButtonStandard>
      <ButtonStandard tertiary route="catalog">
        Productos del Mes
      </ButtonStandard>
      <ButtonStandard primary route="/auth/login">
        Iniciar Sesión
      </ButtonStandard>
    </div>//boludo
  );
};
