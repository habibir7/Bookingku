const getData = async (code) => {
    const res = await fetch(`https://easy-lime-seal-toga.cyclic.app/airlines/flight/${code}`)
  
    if(!res.ok){
        throw new Error("Failed get data")
    }
    const data = await res.json()
  
    console.log(data)
    return data
  }

  export default async function Ticket({params}) {
    const data = await getData(params.ticket)
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
              <p>ticket : {params?.ticket ?? "-"}</p>
              <p>ticket : {data?.name ?? "-"}</p>
      </main>
    );
  }