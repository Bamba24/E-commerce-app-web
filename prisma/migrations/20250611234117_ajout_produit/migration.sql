/*
  Warnings:

  - You are about to drop the `articlepanier` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `categorie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `produit` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `imageProduit` to the `ArticleCommande` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomProduit` to the `ArticleCommande` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `articlecommande` DROP FOREIGN KEY `ArticleCommande_produitId_fkey`;

-- DropForeignKey
ALTER TABLE `articlepanier` DROP FOREIGN KEY `ArticlePanier_produitId_fkey`;

-- DropForeignKey
ALTER TABLE `articlepanier` DROP FOREIGN KEY `ArticlePanier_utilisateurId_fkey`;

-- DropForeignKey
ALTER TABLE `produit` DROP FOREIGN KEY `Produit_categorieId_fkey`;

-- DropIndex
DROP INDEX `ArticleCommande_produitId_fkey` ON `articlecommande`;

-- AlterTable
ALTER TABLE `articlecommande` ADD COLUMN `imageProduit` VARCHAR(191) NOT NULL,
    ADD COLUMN `nomProduit` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `articlepanier`;

-- DropTable
DROP TABLE `categorie`;

-- DropTable
DROP TABLE `produit`;
