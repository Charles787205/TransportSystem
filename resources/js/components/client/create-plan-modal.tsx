import { usePage } from "@inertiajs/react"
import type { BusinessUnitData, DestinationData } from "@/generated/Client";
import { Dialog } from "../ui/dialog"

const CreatePlanModal = () => {

  const { businessUnits, destinations } = usePage<{
    businessUnits: BusinessUnitData,
    destinations: DestinationData
  }>().props;

  return (
    <div>CreatePlanModal</div>
  )
}

export default CreatePlanModal