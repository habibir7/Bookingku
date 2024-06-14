import Image from "next/image";


export function Place(){
    return(
        <div className="flex flex-col w-screen p-8">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <label>Trending</label>
                    <label>Trending destinations</label>
                </div>
                <div>
                    View All
                </div>
            </div>
            <div className="flex flex-row">
                    <Image className="mx-2" src={'/card.png'} width={200} height={150} alt='photo'/>
                    <Image className="mx-2" src={'/card2.png'} width={200} height={150} alt='photo'/>
                    <Image className="mx-2" src={'/card.png'} width={200} height={150} alt='photo'/>
                    <Image className="mx-2" src={'/card2.png'} width={200} height={150} alt='photo'/>
                    <Image className="mx-2" src={'/card.png'} width={200} height={150} alt='photo'/>
                    <Image className="mx-2" src={'/card2.png'} width={200} height={150} alt='photo'/>
            </div>
        </div>
    )
}