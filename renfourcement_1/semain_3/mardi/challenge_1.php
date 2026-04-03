<?php

class Distributeur
{
    private array $produits;
    private float $caisse = 0;

    public function __construct()
    {
        $this->produits = [
            ['nom' => 'tea', 'prix' => 6, 'stock' => 20],
            ['nom' => 'eau', 'prix' => 3, 'stock' => 14],
            ['nom' => 'coca', 'prix' => 8, 'stock' => 23],
            ['nom' => 'fanta', 'prix' => 7, 'stock' => 19],
            ['nom' => 'cofe', 'prix' => 10, 'stock' => 0]
        ];
    }






    public function afficherProduits()
    {
        foreach ($this->produits as $produit) {
            echo $produit['nom'] . " : " . $produit['prix'] . "DH <br>";
        }
    }

    public function acheter($nomProduit, $montantInsere)
    {
        $x = 0;
        foreach ($this->produits as $produit) {
            if ($produit['nom'] == $nomProduit) {
                $x++;
                if ($produit['prix'] > $montantInsere) {
                    return 'le prix est pas makafich ' . $montantInsere;
                }
                if ($produit['stock']<=0) {
                    return 'stock makafich';
                }
                if ($produit['prix'] <= $montantInsere && $produit['stock'] > 0) {
                    $produit['stock']--;
                    $this->caisse += $montantInsere - $produit['prix'];
                    return 'votre achat passer avec succer votre monnai est ' . $montantInsere - $produit['prix'];
                }
            }
        }
        if ($x == 0) {
            return 'le produit ne trouve pas';
        }

        return 'rupture ';
    }

    public function remplir($nomProduit, $quantite)
    {
        foreach ($this->produits as $produit) {
            if ($quantite <= 0) {
                return 'la quantiter que tu es saisi est pas depasser 0';
            }
            if ($produit['nom'] == $nomProduit && $quantite > 0) {
                $produit['stock'] += $quantite;
                return 'quantiter ajouter avec succee';
            }
        }
        return 'produit pas trouver';
    }

    public function getRecette()
    {
        return $this->caisse;
    }
}

$dist =  new Distributeur();
echo $dist->acheter('sprite', 3) . '<br>';
echo $dist->acheter('tea', 3). '<br>';
echo $dist->acheter('cofe',12). '<br>';
echo $dist->acheter('tea',40);
