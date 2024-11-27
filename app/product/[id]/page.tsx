function Page({ data }: { data: any }) {
    return (
        <>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
        </>
    )
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/products');
    const data = await res.json();

    return {
        props: { data }
    }
}

export default Page