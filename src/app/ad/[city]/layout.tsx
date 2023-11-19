import CityShowerIcon from "@/components/cityShowerIcon"
import SearchItemeByDescribe from "@/components/searchItemeByDescribe"
import SearchItemeByWord from "@/components/searchItemeByWord"

export default function CityLayout (
    {
        children,
        params
      }: {
        children: React.ReactNode,
        params : {
            city : string
        }
      }
) {
    return (
        <div className="w-full h-full">
            <div className="py-1 flex justify-between items-center">
                <CityShowerIcon city={params.city} />
                <SearchItemeByWord />
                <SearchItemeByDescribe />
            </div>
            {children}

        </div>
    )
}