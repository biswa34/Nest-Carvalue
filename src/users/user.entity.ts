import { AfterInsert, AfterRemove, AfterUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    email:string;

    @Column()
    password:string


    @AfterInsert()
    logInsert(){
        console.log('Insert user with', this.id);
    }

    @AfterUpdate()
    logUpdate(){
        console.log('Update user with', this.id);
    }

    @AfterRemove()
    logRemove(){
        console.log('Delete user with', this.id);
    }
}