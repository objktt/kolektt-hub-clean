import { PricingCards } from "~/components/price/pricing-cards";
import { PricingFaq } from "~/components/price/pricing-faq";
import type { Locale } from "~/config/i18n-config";
import { getDictionary } from "~/lib/get-dictionary";

export const metadata = {
  title: "Pricing",
};

export default async function PricingPage({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) {
  const dict = await getDictionary(lang);

  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      <PricingCards
        userId={undefined}
        subscriptionPlan={undefined}
        dict={dict.price}
        params={{ lang }}
      />
      <hr className="container" />
      <PricingFaq params={{ lang }} dict={dict.price} />
    </div>
  );
}
