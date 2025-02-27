import Link from "next/link";

export const metadata = {
  title: "CGV",
  description: "Conditions générales de vente.",
};
export default function CGV() {
  return (
    <main className="flex flex-col items-center p-4 text-justify">
      <section className="py-16">
        <h1 className="font-wide text-center text-3xl uppercase">
          Conditions Générales de vente
        </h1>
      </section>
      <section className="max-w-4xl">
        <h2 className="text-md font-wide mt-4 uppercase">Article 1. Objet </h2>
        <p>
          Les présentes conditions de vente visent à définir les relations
          contractuelles entre GRP et l&apos;acheteur et les conditions
          applicables à tout achat effectué par le biais du site internet{" "}
          <Link className="underline" href="https://peyronnet.group">
            https://peyronnet.group
          </Link>
          . L&apos;acquisition d&apos;un produit à travers le présent site
          implique une acceptation sans réserve par l&apos;acheteur des
          présentes conditions de vente dont l&apos;acheteur reconnaît avoir
          pris connaissance préalablement à sa commande. Avant toute
          transaction, l&apos;acheteur déclare d&apos;une part que l&apos;achat
          de produits sur le site{" "}
          <Link className="underline" href="https://peyronnet.group">
            https://peyronnet.group
          </Link>{" "}
          est sans rapport direct avec son activité professionnelle et est
          limité à une utilisation strictement personnelle et d&apos;autre part
          avoir la pleine capacité juridique, lui permettant de s&apos;engager
          au titre des présentes conditions générales de ventes.{" "}
        </p>
        <p>
          La société GRP conserve la possibilité de modifier à tout moment ces
          conditions de ventes, afin de respecter toute nouvelle réglementation
          ou dans le but d&apos;améliorer l&apos;utilisation de son site. De ce
          fait, les conditions applicables seront celles en vigueur à la date de
          la commande par l&apos;acheteur.
        </p>
        <h2 className="text-md font-wide mt-4 uppercase">
          Article 2. Produits{" "}
        </h2>
        <p>
          Les produits proposés sont ceux qui figurent sur le site{" "}
          <Link className="underline" href="https://peyronnet.group">
            https://peyronnet.group
          </Link>{" "}
          de la société GRP, dans la limite des stocks disponibles. La société
          GRP se réserve le droit de modifier à tout moment l&apos;assortiment
          de produits. Chaque produit est présenté sur le site internet sous
          forme d&apos;un descriptif reprenant ses principales caractéristiques
          techniques (contenance, utilisation, composition…). Les photographies
          sont les plus fidèles possibles mais n&apos;engagent en rien le
          Vendeur. La vente des produits présentés dans le site{" "}
          <Link className="underline" href="https://peyronnet.group">
            https://peyronnet.group
          </Link>{" "}
          est destinée à tous les acheteurs résidants dans les pays qui
          autorisent pleinement l&apos;entrée sur leur territoire de ces
          produits.{" "}
        </p>
        <h2 className="text-md font-wide mt-4 uppercase">Article 3. Tarifs </h2>
        <p>
          Les prix figurant sur les fiches produits du catalogue internet et
          sont des prix en Euros (€) hors taxe (HT) qui ne tiennent pas compte
          de la TVA applicable au jour de la commande. Tout changement du taux
          de la TVA pourra être répercuté sur le prix des produits. La société
          GRP se réserve le droit de modifier ses prix à tout moment, étant
          toutefois entendu que le prix figurant au catalogue le jour de la
          commande sera le seul applicable à l&apos;acheteur. Les prix indiqués
          ne comprennent pas les frais de livraison, facturés en supplément du
          prix des produits achetés suivant le montant total de la commande.
        </p>
        <h2 className="text-md font-wide mt-4 uppercase">
          Article 4. Commande et modalités de paiement{" "}
        </h2>
        <p>
          Avant toute commande, l&apos;acheteur doit créer un compte sur le site{" "}
          <Link className="underline" href="https://account.peyronnet.group">
            https://account.peyronnet.group
          </Link>
          . La rubrique de création de compte est accessible directement depuis
          la barre de menu. A chaque visite, l&apos;acheteur, s&apos;il souhaite
          commander ou consulter son compte (abonnements, profil…), devra
          s&apos;identifier à l&apos;aide de ces informations. La société GRP
          propose à l&apos;acheteur de commander et régler ses produits par le
          biais de la plateforme Stripe avec laquelle elle collabore.
        </p>
        <p>
          La confirmation d&apos;une commande entraîne acceptation des présentes
          conditions de vente, la reconnaissance d&apos;en avoir parfaite
          connaissance et la renonciation à se prévaloir de ses propres
          conditions d&apos;achat. L&apos;ensemble des données fournies et la
          confirmation enregistrée vaudront preuve de la transaction. Si
          l&apos;acheteur possède une adresse électronique et s&apos;il l&apos;a
          renseignée sur son bon de commande, la société GRP lui communiquera
          par courrier électronique la confirmation de l&apos;enregistrement de
          sa commande.
        </p>
        <p>
          Si l&apos;acheteur souhaite contacter la société GRP, il peut le faire
          par email à l&apos;adresse suivante :{" "}
          <Link className="underline" href="mailto:peyronnet-group@outlook.com">
            peyronnet-group@outlook.com
          </Link>
          .
        </p>
        <h2 className="text-md font-wide mt-4 uppercase">
          Article 5. Réserve de propriété{" "}
        </h2>
        <p>
          La société GRP conserve la propriété pleine et entière des produits
          vendus jusqu&apos;au parfait encaissement du prix, en principal, frais
          et taxes compris.
        </p>
        <h2 className="text-md font-wide mt-4 uppercase">
          Article 6. Rétractation{" "}
        </h2>
        <p>
          En vertu de l&apos;article L121-20 du Code de la consommation,
          l&apos;acheteur dispose d&apos;un délai de quatorze jours ouvrables à
          compter de la livraison de leur commande pour exercer son droit de
          rétractation et ainsi faire retour du produit au vendeur pour échange
          ou remboursement sans pénalité, à l&apos;exception des frais de
          retour.
        </p>

        <h2 className="text-md font-wide mt-4 uppercase">
          Article 7. Responsabilité{" "}
        </h2>
        <p>
          La société GRP, dans le processus de vente à distance, n&apos;est
          tenue que par une obligation de moyens. Sa responsabilité ne pourra
          être engagée pour un dommage résultant de l&apos;utilisation du réseau
          Internet tel que perte de données, intrusion, virus, rupture du
          service, ou autres problèmes involontaires.
        </p>

        <h2 className="text-md font-wide mt-4 uppercase">
          Article 8. Gestion et souscription à un abonnement
        </h2>
        <p>
          En tant que client du GRP, vous avez la possibilité de souscrire à un
          abonnement proposé par l&apos;une de nos filiales (Léo Corporation,
          Devyus, ou Synapsy). Vous avez le droit d&apos;annuler votre
          abonnement à tout moment, sans frais ni pénalités. Cette annulation
          peut être effectuée directement depuis votre espace client en ligne,
          et prendra effet immédiatement. Il est possible de souscrire à
          plusieurs abonnements simultanément au sein du GRP, vous permettant de
          combiner plusieurs produits sur un seul compte.
        </p>
        <p>
          En cas de non-paiement de votre abonnement ou si une tentative de
          paiement échoue, les avantages liés à celui-ci seront automatiquement
          et immédiatement révoqués. Nous vous encourageons donc à maintenir vos
          informations de paiement à jour pour éviter toute interruption de
          service.
        </p>
        <p>
          Un essai gratuit peut être proposé exclusivement sur le site
          d&apos;une filiale du GRP et ne pas être disponible sur le site
          principal peyronnet.group. De plus, cet essai gratuit peut être offert
          lors de votre première commande chez le GRP. Cependant, une fois la
          période d&apos;essai terminée, cette éligibilité est retirée pour tous
          les produits GRP.
        </p>
        <p>
          Si vous ne choisissez pas d&apos;annuler votre essai gratuit avant la
          fin de la période d&apos;essai, le prélèvement automatique mensuel,
          annuel, ou selon le cycle de facturation auquel vous avez souscrit,
          commencera dès l&apos;expiration de cette période. Pour éviter ce
          prélèvement automatique dans le cas où vous ne souhaitez pas
          poursuivre vers un abonnement payant, vous devez annuler manuellement
          l&apos;essai dans votre espace compte une heure avant la date limite
          au plus tard.
        </p>

        <h2 className="text-md font-wide mt-4 uppercase">
          Article 9. Données à caractère personnel
        </h2>
        <p>
          La société GRP s&apos;engage à préserver la confidentialité des
          informations fournies par l&apos;acheteur, qu&apos;il serait amené à
          transmettre pour l&apos;utilisation de certains services. Toute
          information le concernant est soumise aux dispositions de la loi n°
          78-17 du 6 janvier 1978. A ce titre, l&apos;internaute dispose
          d&apos;un droit d&apos;accès, de modification et de suppression des
          informations le concernant. Il peut en faire la demande à tout moment
          par email à l&apos;adresse suivante :{" "}
          <Link className="underline" href="mailto:peyronnet-group@outlook.com">
            peyronnet-group@outlook.com
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
