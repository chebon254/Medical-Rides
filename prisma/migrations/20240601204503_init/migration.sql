-- CreateTable
CREATE TABLE `Booking` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `pickUpDate` DATETIME(3) NOT NULL,
    `pickUpTime` VARCHAR(191) NOT NULL,
    `returnTime` VARCHAR(191) NOT NULL,
    `sourceAddress` VARCHAR(191) NOT NULL,
    `destinationAddress` VARCHAR(191) NOT NULL,
    `sourceLongitude` DOUBLE NOT NULL,
    `sourceLatitude` DOUBLE NOT NULL,
    `destinationLongitude` DOUBLE NOT NULL,
    `destinationLatitude` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
