<?php

namespace App\Entity;

use App\Repository\MeetingsRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\SerializedName;

/**
 * @ORM\Entity(repositoryClass=MeetingsRepository::class)
 * @ApiResource(
 *     normalizationContext={"groups"={"meeting:read"}},
 *     denormalizationContext={"groups"={"meeting:write"}}
 * )
 */
class Meetings
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups("meeting:read")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Salers::class, inversedBy="meetings")
     * @Groups("meeting:write")
     */
    private $Saler;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"meeting:read" , "meeting:write" , "saler:read"})
     */
    private $DateStart;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"meeting:read" , "meeting:write" , "saler:read"})
     */
    private $DateEnd;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSaler(): ?Salers
    {
        return $this->Saler;
    }

    public function setSaler(?Salers $Saler): self
    {
        $this->Saler = $Saler;

        return $this;
    }

    public function getDateStart(): ?\DateTimeInterface
    {
        return $this->DateStart;
    }

    public function setDateStart(\DateTimeInterface $DateStart): self
    {
        $this->DateStart = $DateStart;

        return $this;
    }

    public function getDateEnd(): ?\DateTimeInterface
    {
        return $this->DateEnd;
    }

    public function setDateEnd(\DateTimeInterface $DateEnd): self
    {
        $this->DateEnd = $DateEnd;

        return $this;
    }
}
