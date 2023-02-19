

type Props = {
    image : string,
    name: string,
    description: string

};
const Avatar = ({image,name,description}: Props) => {
  return (
    <div className="bg-veryLightGray w-full flex flex-col items-center">
    <div className="w-20  -mt-14 py-6  -mb-4">
        <img  src={image} alt="" />
    </div>
    <span className="text-lg font-bold">{name}</span>
    <p className="mb-6 max-w-sm">{description}</p>
</div>
  )
};
export default Avatar;