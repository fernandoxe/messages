import { ReactComponent as TriangleIcon } from '../../icons/triangle.svg';

export interface HomeProps {
}

export const Home = ({}: HomeProps) => {
  return (
    <div className="relative">
      <div className="text-[#222c32] absolute top-0 -left-2">
        <TriangleIcon />
      </div>
      <div className="flex flex-col gap-6 bg-[#222c32] rounded-[2rem] rounded-t-none p-6 relative">
        <div className="text-[#65d072] text-[2rem] leading-none">
          Name
        </div>
        <div className="text-[#eaedef] text-[2rem] leading-none">
          Asd querwqe tiutriio asd querwqe tiutriio asd querwqe tiutriio
        </div>
      </div>
    </div>
  );
};
