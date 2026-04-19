<?php

abstract class Article
{
    protected string $reference;
    protected string $designation;
    protected float $prix_ht;
    public function __construct(string $reference,string $designation,float $prix_ht) {
        $this->reference = $reference;
        $this->designation = $designation;
        $this->prix_ht = $prix_ht;
    }
    abstract function calculerPrixTTC();
}

class Produit extends Article
{
    public function __construct(string $reference, string $designation, float $prix_ht)
    {
        return parent::__construct($reference, $designation, $prix_ht);
    }

    public function calculerPrixTTC()
    {
        return   $this->prix_ht * 1.20;
    }
}

class Service  extends Article
{
    public function __construct(string $reference, string $designation, float $prix_ht)
    {
        return parent::__construct($reference, $designation, $prix_ht);
    }
    public function calculerPrixTTC()
    {
        return $this->prix_ht * 1.1;
    }
}

class ProduitAlimentaire extends Article
{
    public function __construct(string $reference, string $designation, float $prix_ht)
    {
        return parent::__construct($reference, $designation, $prix_ht);
    }
    public function calculerPrixTTC()
    {
        return $this->prix_ht * 1.055;
    }
}

class Facture {
    public int $numero;
    public DateTime $date;
    public string $client;
    public array $ligne;
    
}
